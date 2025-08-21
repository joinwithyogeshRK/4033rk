import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { toast } from '@/components/ui/use-toast';
import { iconData } from '@/data/icons';

interface IconGridProps {
  searchQuery: string;
  selectedCategory: string;
}

export function IconGrid({ searchQuery, selectedCategory }: IconGridProps) {
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const filteredIcons = iconData.filter((icon) => {
    const matchesSearch = icon.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || icon.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const copyToClipboard = (iconName: string) => {
    const importStatement = `import { ${iconName} } from 'lucide-react';`;
    navigator.clipboard.writeText(importStatement);
    setCopiedIcon(iconName);
    toast({
      title: "Copied to clipboard",
      description: importStatement,
      duration: 2000,
    });
    
    setTimeout(() => {
      setCopiedIcon(null);
    }, 2000);
  };

  return (
    <div className="icon-grid">
      {filteredIcons.length > 0 ? (
        filteredIcons.map((icon) => (
          <TooltipProvider key={icon.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="group icon-cell relative">
                  <Link to={`/icon/${icon.name}`} className="flex flex-col items-center">
                    <div className="p-4 flex items-center justify-center">
                      {/* Dynamic icon rendering */}
                      <div 
                        className="h-8 w-8 text-foreground group-hover:text-primary transition-colors"
                        dangerouslySetInnerHTML={{ __html: icon.svg }}
                      />
                    </div>
                    <span className="mt-2 text-xs text-center opacity-70 group-hover:opacity-100 transition-opacity">
                      {icon.name}
                    </span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      copyToClipboard(icon.name);
                    }}
                  >
                    {copiedIcon === icon.name ? (
                      <Check className="h-4 w-4 text-success" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{icon.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))
      ) : (
        <div className="col-span-full py-12 text-center">
          <p className="text-muted-foreground">No icons found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}

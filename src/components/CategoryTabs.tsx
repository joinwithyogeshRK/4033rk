import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { categories } from '@/data/categories';

interface CategoryTabsProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryTabs({ selectedCategory, onSelectCategory }: CategoryTabsProps) {
  return (
    <ScrollArea className="w-full">
      <div className="flex space-x-2 pb-2 px-4 overflow-x-auto">
        <Button
          variant={selectedCategory === 'All' ? 'default' : 'outline'}
          size="sm"
          className="category-tab"
          onClick={() => onSelectCategory('All')}
          data-state={selectedCategory === 'All' ? 'active' : 'inactive'}
        >
          All
        </Button>
        
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            size="sm"
            className="category-tab whitespace-nowrap"
            onClick={() => onSelectCategory(category)}
            data-state={selectedCategory === category ? 'active' : 'inactive'}
          >
            {category}
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
}

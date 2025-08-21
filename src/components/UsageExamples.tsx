import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CodeSnippet } from '@/components/CodeSnippet';

interface UsageExamplesProps {
  iconName: string;
}

export function UsageExamples({ iconName }: UsageExamplesProps) {
  const reactImport = `import { ${iconName} } from 'lucide-react';

function MyComponent() {
  return <${iconName} />;
}`;

  const reactProps = `import { ${iconName} } from 'lucide-react';

function MyComponent() {
  return (
    <${iconName}
      size={24} // size in pixels
      strokeWidth={2} // thickness of lines
      color="currentColor" // any valid CSS color
      className="text-blue-500" // tailwind or other classes
    />
  );
}`;

  const nextJsImport = `import { ${iconName} } from 'lucide-react';

export default function Page() {
  return (
    <div>
      <${iconName} className="h-6 w-6" />
    </div>
  );
}`;

  return (
    <Tabs defaultValue="react">
      <TabsList className="w-full grid grid-cols-3">
        <TabsTrigger value="react">React</TabsTrigger>
        <TabsTrigger value="props">Props</TabsTrigger>
        <TabsTrigger value="nextjs">Next.js</TabsTrigger>
      </TabsList>
      <TabsContent value="react">
        <CodeSnippet code={reactImport} />
      </TabsContent>
      <TabsContent value="props">
        <CodeSnippet code={reactProps} />
      </TabsContent>
      <TabsContent value="nextjs">
        <CodeSnippet code={nextJsImport} />
      </TabsContent>
    </Tabs>
  );
}

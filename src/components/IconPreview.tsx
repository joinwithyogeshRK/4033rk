import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface IconPreviewProps {
  iconSvg: string;
  iconName: string;
}

export function IconPreview({ iconSvg, iconName }: IconPreviewProps) {
  const [size, setSize] = useState(24);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [color, setColor] = useState('#000000');

  const updateSvgAttributes = (svg: string): string => {
    return svg
      .replace(/width="\d+"/, `width="${size}"`)
      .replace(/height="\d+"/, `height="${size}"`)
      .replace(/stroke-width="\d+(\.\d+)?"/, `stroke-width="${strokeWidth}"`)
      .replace(/stroke="[^"]*"/, `stroke="${color}"`);
  };

  const updatedSvg = updateSvgAttributes(iconSvg);

  return (
    <div className="preview-panel">
      <div className="flex flex-col items-center justify-center p-8 bg-muted rounded-md">
        <div 
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: updatedSvg }}
        />
        <h3 className="text-lg font-medium">{iconName}</h3>
      </div>

      <div className="grid gap-4 mt-4">
        <div className="space-y-2">
          <Label htmlFor="size">Size: {size}px</Label>
          <Slider
            id="size"
            min={12}
            max={96}
            step={1}
            value={[size]}
            onValueChange={(value) => setSize(value[0])}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="stroke-width">Stroke Width: {strokeWidth}</Label>
          <Slider
            id="stroke-width"
            min={0.5}
            max={4}
            step={0.1}
            value={[strokeWidth]}
            onValueChange={(value) => setStrokeWidth(value[0])}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="color">Color</Label>
          <div className="flex gap-2">
            <div className="flex-1">
              <Select 
                value={color} 
                onValueChange={setColor}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="#000000">Black</SelectItem>
                  <SelectItem value="#ffffff">White</SelectItem>
                  <SelectItem value="#2563eb">Blue</SelectItem>
                  <SelectItem value="#16a34a">Green</SelectItem>
                  <SelectItem value="#dc2626">Red</SelectItem>
                  <SelectItem value="#ca8a04">Yellow</SelectItem>
                  <SelectItem value="#9333ea">Purple</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-12 h-10 rounded-md border border-border overflow-hidden">
              <Input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full h-full p-0 border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

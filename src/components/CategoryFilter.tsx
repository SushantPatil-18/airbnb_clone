
import { useState } from 'react';
import { categories } from '@/data/listings';
import { 
  Home, 
  Umbrella, 
  Mountain, 
  Droplets, 
  TreeDeciduous, 
  Building, 
  Sun,
  TreePalm
} from 'lucide-react';

interface CategoryFilterProps {
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({ onSelectCategory }: CategoryFilterProps) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    onSelectCategory(categoryId);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Home size={22} />;
      case 'umbrella':
        return <Umbrella size={22} />;
      case 'mountain':
        return <Mountain size={22} />;
      case 'droplets':
        return <Droplets size={22} />;
      case 'tree':
        return <TreeDeciduous size={22} />;
      case 'building':
        return <Building size={22} />;
      case 'sun':
        return <Sun size={22} />;
      case 'palm-tree':
        return <TreePalm size={22} />;
      default:
        return <Home size={22} />;
    }
  };

  return (
    <div className="container mx-auto px-4 pt-6 pb-4 overflow-x-auto">
      <div className="flex space-x-8 min-w-max">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`category-button flex flex-col items-center pb-2 px-2 ${
              activeCategory === category.id ? 'active' : ''
            }`}
          >
            <div className="category-icon mb-1">
              {getIcon(category.icon)}
            </div>
            <span className="text-xs font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;

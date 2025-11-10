// components/Icon.tsx
import dynamic from 'next/dynamic';
import { LucideProps, icons } from 'lucide-react';

// Define the IconProps interface. Omit 'ref' as it's not passed for simple utility wrappers.
export interface IconProps extends Omit<LucideProps, 'ref'> {
  // Enforce that iconName is one of the valid icon keys from the lucide-react library
  iconName: keyof typeof icons; 
}

/**
 * A utility component that dynamically loads and renders a Lucide icon based on its string name.
 * This is crucial for performance, as it prevents bundling the entire Lucide icon library.
 * * @param {IconProps} props - The iconName and any standard LucideProps (like className, size, color).
 * @returns {JSX.Element | null} The rendered Lucide icon component.
 */
const Icon = ({ iconName, ...props }: IconProps) => {
  // Check if the icon exists in the static map for early error handling
  if (!icons[iconName]) {
    console.error(`Icon "${iconName}" is not a recognized Lucide icon.`);
    return null;
  }

  const LucideIcon = dynamic(() => 
    import('lucide-react').then(mod => mod.icons[iconName]) as Promise<React.ComponentType<LucideProps>>,
    { ssr: false } // Ensure this is client-side rendered for efficiency
  );

  // Pass through remaining LucideProps (size, color, className, etc.)
  return <LucideIcon {...props} />;
};

export default Icon;

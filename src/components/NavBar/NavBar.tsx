import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export function NavBar() {
  return (
    <div className="flex justify-center p-4 bg-gray-800">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <a href="#about" className={navigationMenuTriggerStyle()}>
            <NavigationMenuLink asChild>
              <span>À propos</span>
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="#technologies" className={navigationMenuTriggerStyle()}>
            <NavigationMenuLink asChild>
              <span>Technologies</span>
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="#projects" className={navigationMenuTriggerStyle()}>
            <NavigationMenuLink asChild>
              <span>Projets</span>
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="#contact" className={navigationMenuTriggerStyle()}>
            <NavigationMenuLink asChild>
              <span>Contact</span>
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  );
}

export default NavBar;

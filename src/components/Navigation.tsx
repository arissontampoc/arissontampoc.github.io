import React, { useState } from 'react';

import { TabMenu } from 'primereact/tabmenu';
import { MenuItem } from 'primereact/menuitem';

function Navigation() {
    const [activeIndex, setActiveIndex] = useState<number>();

    const menuItems: MenuItem[] = [
      {label: 'Home', icon: 'pi pi-fw pi-home', url: '/'},
      {label: 'About Me', icon: 'pi pi-fw pi-calendar', url: '/#about-me'},
      {label: 'Work', icon: 'pi pi-fw pi-pencil', url: '/#experience'},
      {label: 'Contact', icon: 'pi pi-fw pi-cog', url: '/#contact-me'}
    ];

    return (
      <div className="navigation">
        <TabMenu 
          model={menuItems}
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
        />
      </div>
    );

}

export default Navigation;
import React, { useState } from 'react';

import { TabMenu } from 'primereact/tabmenu';
import { MenuItem } from 'primereact/menuitem';

function Navigation() {
    const [activeIndex, setActiveIndex] = useState<number>();

    const menuItems: MenuItem[] = [
      {label: 'HOME', icon: 'pi pi-fw pi-home', url: '/'},
      {label: 'ABOUT ME', icon: 'pi pi-fw pi-id-card', url: '/#about-me'},
      {label: 'WORK', icon: 'pi pi-fw pi-briefcase', url: '/#experience'},
      {label: 'CONTACT', icon: 'pi pi-fw pi-phone', url: '/#contact-me'}
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
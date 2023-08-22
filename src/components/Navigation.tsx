import React, { useState } from 'react';

import { TabMenu } from 'primereact/tabmenu';

function Navigation() {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const menuItems = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'About Me', icon: 'pi pi-fw pi-calendar'},
      {label: 'Work', icon: 'pi pi-fw pi-pencil'},
      {label: 'Background', icon: 'pi pi-fw pi-file'},
      {label: 'Contact', icon: 'pi pi-fw pi-cog'}
    ];

    return (
      <TabMenu 
        model={menuItems}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      />
    );

}

export default Navigation;
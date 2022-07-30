//React
import React from 'react';

export default function getSvgType (type:string) {
    switch (type) {
        case 'library-books': return '(MaterialIcons)';
        case 'car-side': return '(FontAwesome5)';
        case 'circle': return '(FontAwesome)';
        case 'delete': return '(MaterialIcons)';
        case 'gear': return '(FontAwesome)';
        case 'graph': return '(Octicons)';
        case 'home': return '(FontAwesome)';
        case 'map': return '(Foundation)';
        case 'down': return '(AntDesign)';
        case 'page': return '(AntDesign)';
        case 'md-newspaper-outline': return '(Ionicons)';
        case 'user-circle-o': return '(FontAwesome)';
    }
}
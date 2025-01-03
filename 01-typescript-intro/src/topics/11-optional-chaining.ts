
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'David',
}

const passenger2: Passenger = {
    name: 'Mineska',
    children: ['Gael','Mikad'],
}

const returnChildrenNumber = ( passenger: Passenger ): number => {

    const howManyChildren = passenger.children?.length || 0;
    // const howManyChildren = passenger.children!.length;

    console.log( passenger.name, howManyChildren, passenger.children);

    return howManyChildren;
}


returnChildrenNumber( passenger2 );

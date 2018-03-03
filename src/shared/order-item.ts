export class OrderItem {
    _id: string;
    count: number;
    name: string;
    price: number;
    stages: ItemStage[];
}

export class ItemStage {
    id: number;
    timestamp: number;
}

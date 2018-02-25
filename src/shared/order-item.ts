export class OrderItem {
    count: number;
    name: string;
    price: number;
    stages: ItemStage[];
}

export class ItemStage {
    id: number;
    timestamp: number;
}

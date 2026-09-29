

interface OrderState {
    orders: Order[];
    currentOrder: Order | null;
    isLoading: boolean;
    error: string | null
}

// to confirm, pending, processing, delivered, cancelled,
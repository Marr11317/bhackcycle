export function iconNameForTransportType(transportType: TransportType): string {
    switch (transportType) {
        case "bicycle":
            return "bicycle";
        case "walk":
            return "walk";
        case "publicTransport":
            return "bus";
        default:
            return "walk";
    }
}

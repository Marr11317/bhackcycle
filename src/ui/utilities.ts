export function iconNameForTransportType(transportType: TransportType): string {
  switch (transportType) {
    case "bicycle":
      return "bicycle"
    case "publicTransport":
      return "bus"
    case "walk":
    default:
      return "walk"
  }
}

export function englishNameForTripType(transportType: TransportType): string {
  switch (transportType) {
    case "bicycle":
      return "bike trip"
    case "publicTransport":
      return "bus trip"
    case "walk":
    default:
      return "walk"
  }
}


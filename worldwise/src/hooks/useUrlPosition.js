import { useSearchParams } from "react-router-dom";

// whenever we need lat lng position from url we use this hook
export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");
  return [mapLat, mapLng];
}

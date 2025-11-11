import { Cloud } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const Precipitationoverview = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">Precipitation</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col divide-y-2">
        {Array.from({ length: 4 }, () => (
          <div className="flex  flex-col py-3">
            <div className="flex items-center justify-between">
              <p>Last 24 Hours</p>
              <p>
                <span className="text-xl">3 </span>MM
              </p>
            </div>

            <div className="flex gap-1">
              <Cloud />
              <p>Rain</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Precipitationoverview;

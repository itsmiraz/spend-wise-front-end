import AnimatedPage from "@/components/ui/animatedPage"
import TypesChart from "./components/TypesChart"

const Analytics = () => {
  return (
    <div>
      <AnimatedPage>
        <h2 className="mt-4">Analytics</h2>
        <div className="relative py-5">
          <TypesChart />
        </div>
      </AnimatedPage>
    </div>
  )
}

export default Analytics
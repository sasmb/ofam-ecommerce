import { MagnetizeButton } from "@/components/ui/magnetize-button"

function MagnetizeButtonDemo() {
    return (
        <div className="flex flex-col sm:flex-row gap-4">
            <MagnetizeButton 
                variant="default" 
                particleCount={14} 
                attractRadius={50}
            >
                Default Button
            </MagnetizeButton>
            
            <MagnetizeButton 
                variant="outline" 
                particleCount={12} 
                attractRadius={50}
            >
                Outline Button
            </MagnetizeButton>
            
            <MagnetizeButton 
                variant="secondary" 
                particleCount={16} 
                attractRadius={50}
            >
                Secondary Button
            </MagnetizeButton>
        </div>
    )
}

export { MagnetizeButtonDemo } 
const AdPlaceholder = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/30 px-4 py-8 text-sm text-muted-foreground ${className}`}>
    Ad Space — Google AdSense
  </div>
);

export default AdPlaceholder;

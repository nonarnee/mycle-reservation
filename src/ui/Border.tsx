import { theme } from '@/styles/theme';

export default function Border({ size = 1 }: { size?: number }) {
  return <div style={{ flex: 'none', height: size, background: theme.colors.background }} />;
}

Border.Padding = ({ size }: { size: number }) => {
  return (
    <div style={{ paddingLeft: `${size}px`, width: '100%' }}>
      <div style={{ width: '100%', height: '1px', background: theme.colors.background }} />
    </div>
  );
};

export default function Template({ children }
    : { children: React.ReactNode }) {
    return <div>

        <h1>root template</h1>

        {children}
    </div>
}
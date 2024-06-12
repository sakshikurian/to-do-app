export default function Button({title= 'Button', onClick}){
    return <button onClick={onClick} className="px-4 py-2 border rounded">{title}</button>
}
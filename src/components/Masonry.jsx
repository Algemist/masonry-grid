import React, {useMemo} from 'react';

const getShortestColumnIndex = (data) => {
    const [first, ...rest] = data
    let minColHeight = first.reduce((acc, {height }) => acc + height, 0)
    let index = 0
    rest.forEach((col, i) => {
        const colHeight = col.reduce((acc, {height }) => acc + height, 0)
        if (colHeight < minColHeight) {
            index = i + 1
            minColHeight = colHeight
        }
    })
    return index
}

const offset = 34

export const Masonry = ({ items, columns = 4 }) => {
    const masonryColumns = useMemo(() => {
        const columnData = Array(columns).fill(0).map(() => [])
        items.forEach((item) => {
            const shortest = getShortestColumnIndex(columnData)
            columnData[shortest].push(item)
        })
        return columnData
    }, [items, columns])

    return (
        <div style={{ display: "flex", justifyContent: "center", background: "#fff", borderRadius: 25, paddingBottom: 34 }}>
            {masonryColumns.map((col, i) => (
                <div key={i} style={{ marginLeft: i > 0 ? offset : 0 }}>
                    {col.map((item) => (
                        <div key={item.id} style={{ marginTop: offset }}>
                            <img src={item.url} alt={item.id} style={{width: 254, objectFit: "cover", borderRadius: 25}} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Masonry;

import { Item } from "./Item";
import { Load } from "./Load";
import { InfinityLoad } from "./InfinityLoad";

export function List({load, items, loadMore, total}) {
    if (load && items.length === 0) {
      return <Load load={load} />;
    }
    if (!load && items.length === 0) {
      return (
        <div className="py-10 text-sm text-center text-slate-500">No Data</div>
      );
    }
  
    return (
      <>
        <div className="flex items-center justify-around flex-wrap mx-2">
          {items.map((item, index) => {
            return (
              <Item
                data={item}
                key={`${item.id}-${index}`}
                indexKey={index + 1}
              />
            );
          })}
        </div>
        <InfinityLoad
          load={items.length != 0 && items.length < total}
          loadMore={loadMore}
        />
      </>
    );
  }
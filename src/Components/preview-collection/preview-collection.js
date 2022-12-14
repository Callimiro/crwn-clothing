import React from 'react'
import './preview-collection.scss'
import { CollectionItem} from '../collection-item/collection-item.js'
export function PreviewCollection({title,items}) {
  return (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className="preview">
            {
                  items.filter((item, idx) => (idx < 4)).map(({id,...OtherItemProps}) => (

                    <CollectionItem key={id} {...OtherItemProps} ></CollectionItem>
                    ))
            }
        </div>
    </div>
  )
}

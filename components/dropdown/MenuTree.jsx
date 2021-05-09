import React from "react";

const MAX_LEVEL = 10;

const MenuTree = props => {
  let {
    nodeList,
    level,
    maxDepth,
    itemIdSeperator,
    itemId,
    mainContainerRef,
    onNodeSelect
  } = props;
  let megaMenuItemWidth = Math.floor(
    mainContainerRef.current.clientWidth / (maxDepth + 1)
  );
  return (
    <ul
      className={`mega-menu-${level}`}
      style={{
        width: megaMenuItemWidth,
        height: mainContainerRef.current.clientHeight - 2,
        top: mainContainerRef.current.offsetTop,
        left:
          level === 1
            ? mainContainerRef.current.offsetLeft
            : megaMenuItemWidth * (level - 1) +
              mainContainerRef.current.offsetLeft +
              1
      }}
    >
      {nodeList.map((node, i) => (
        <li className="mega-menu-list-item" key={`${node.name}-${level}-${i}`}>
          <div
            className="mega-menu-item"
            onClick={() =>
              onNodeSelect(
                itemId
                  ? `${itemId}${itemIdSeperator}${node.itemId || node.name}`
                  : node.itemId || node.name
              )
            }
          >
            <span className="category-image">
              {node.imageURL ? <img src={node.imageURL} /> : null}
            </span>
            <span className="category-name">{node.name}</span>
          </div>
          {node.nodes && node.nodes.length > 0 && level <= MAX_LEVEL ? (
            <MenuTree
              level={level + 1}
              nodeList={node.nodes}
              itemIdSeperator={itemIdSeperator}
              itemId={
                itemId
                  ? `${itemId}${itemIdSeperator}${node.itemId || node.name}`
                  : node.itemId || node.name
              }
              maxDepth={maxDepth}
              onNodeSelect={onNodeSelect}
              mainContainerRef={mainContainerRef}
            />
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default MenuTree;
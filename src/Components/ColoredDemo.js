import React, { useState } from "react";
import { OrganizationChart } from "primereact/organizationchart";
import './styles.css'
export default function SelectionDemo() {
  const [selection, setSelection] = useState([]);
  const [data, setData] = useState([
    {
      expanded: true,
      type: "person",
      data: {
        image:
          "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
        name: "Amy Elsner",
        post:"Director",
        title: "CEO",
      },
      children: [
        {
          expanded: true,
          type: "person",
          data: {
            image:
              "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
            name: "Anna Fali",
            post:"Director",
            title: "CMO",
          },
          children: [
            {
              expanded: true,
              type: "person",
              data: {
                image:
                  "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
                name: "Joey Blair",
                post:"Director",
                title: "COO",
              },
              children: [
                // Adding children to "Sales"
                {
                  expanded: true,
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
                    name: "Zane French ",
                    post:"Director",
                    title: "COO",
                  },
                },
                {
                  expanded: true,
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
                    name: "Ria",
                    post:"Director",
                    title: "COO",
                  },
                },
              ],
            },
            {
              expanded: true,
              type: "person",
              data: {
                image:
                  "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
                name: "Ria",
                post:"Director",
                title: "COO",
              },
              children: [
                {
                  expanded: true,
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
                    name: "Ria",
                    post:"Director",
                    title: "COO",
                  },
                },
                {
                  expanded: true,
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
                    name: "Ria",
                    post:"Director",
                    title: "COO",
                  },
                },
                {
                  expanded: true,
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
                    name: "Ria",
                    post:"Director",
                    title: "COO",
                  },
                },
              ],
            },
          ],
        },
        {
          expanded: true,
          type: "person",
          data: {
            image:
              "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
            name: "Stephen Shaw",
            post:"Director",
            title: "CTO",
          },
          children: [
            {
              expanded: true,
              type: "person",
              data: {
                image:
                  "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
                name: "Ria",
                post:"Director",
                title: "COO",
              },
              children: [
                // Adding children to "Sales"
                {
                  expanded: true,
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
                    name: "Ria",
                    post:"Director",
                    title: "COO",
                  },
                },
                {
                  expanded: true,
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
                    name: "Ria",
                    post:"Director",
                    title: "COO",
                  },
                },
              ],
            },
            {
              expanded: true,
              type: "person",
              data: {
                image:
                  "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
                name: "Ria",
                post:"Director",
                title: "COO",
              },
              children: [
                // {
                //   expanded: true,
                //   type: "person",
                //   data: {
                //     image:
                //       "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
                //     name: "Ria",
                //     title: "COO",
                //   },
                // },
                {
                  expanded: true,
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
                    name: "Ria",
                    post:"Director",
                    title: "COO",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
  const nodeTemplate = (node) => {
    if (node.type === "person") {
      return (
        <div
        className="card-container"
        style={{
          position: 'relative',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 20px 10px 20px",
          border: "2px solid #C0C0CF",
          borderRadius: "50px",
        }}
      >
        <div className="bg-white border-2  overflow-hidden rounded-lg p-2">
          <div className="flex justify-center items-center"> 
            <span className="font-bold">{node.data.post}</span>
            &ensp;
            <img
              alt={node.data.name}
              src={node.data.image}
              width="40px"
              height="40px"
              className="ml-2" 
            />
            &ensp;
            <span className="font-bold text-2xl ml-2">{node.data.name}</span> 
            &ensp;
            <span className="text-gray-600 ml-2">{node.data.title}</span> 
          </div>
          {/* {node.children && (
            <div className="absolute right-2 top-2 bg-gray-200 rounded-full px-2 py-1 text-xs">
              {node.children.length} {node.children.length === 1}
            </div>
          )} */}
        </div>
      </div>
      
      );
    }

    return node.label;
  };

  const customNodeTemplate = (node) => {
    return (
      <div className="custom-node-template">
        {nodeTemplate(node)}
        {node.children && (
          <div className="vertical-line"></div>
        )}
      </div>
    );
  };
  

  return (
    <div className="card overflow-x-auto">
      <OrganizationChart
        value={data}
        selectionMode="multiple"
        selection={selection}
        onSelectionChange={(e) => setSelection(e.data)}
        nodeTemplate={customNodeTemplate} // Use custom template with lines
      />
    </div>
  );
}
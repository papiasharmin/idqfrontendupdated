
import React from "react";
import './../../../assets/css/App.css';
import {
      PINTAGatewayURL
} from './../../common/Constant';


/**
 * VcTable Component
 */
const VcTable = (props) => {
      // propsから引数を取得する。
      const { 
            _vc, 
            _columns, 
            index, 
            downloadAction
      } = props;

      return (
            <tr>
                  {_columns.map((column) => {
                        // セルに格納する値用の変数
                        let value = _vc; 
                        // カラムの値により、セットする値を変更する。
                        if(column.label === "No.") {
                              return (
                                    <td key={column.id} align={column.align}>
                                          {index + 1}
                                    </td>
                              );
                        }
                        if(column.label === "Name") {
                              return (
                                    <td key={column.id} align={column.align}>
                                          {value.name}
                                    </td>
                              )
                        } 
                        if(column.label === "Action") {
                              return (
                                    <td key={column.id} align={column.align}>
                                          <a href={`${PINTAGatewayURL}/${value.cid}`}>
                                                download
                                          </a>
                                    </td>
                              )
                        }        
                  })}
            </tr>
      );
};

export default VcTable;
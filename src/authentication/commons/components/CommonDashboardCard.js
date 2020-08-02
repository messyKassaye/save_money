import React  from 'react';
import {Card, CardContent, CardHeader} from "@material-ui/core";
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import {chartData as data} from "../../admin/data/chartData";
import {grey} from "@material-ui/core/colors";

class CommonDashboardCard extends React.Component {
    render() {
        return (
            <Card style={{backgroundColor:this.props.cardBackgroundColor,color:this.props.textColor}}>
                <CardHeader
                 title={this.props.title}
                 subheader={<span style={{color:grey[400]}}>{this.props.subheader}</span>}
                 action={this.props.action}
                />
                <CardContent style={{padding:0}}>
                    <AreaChart
                        width={400}
                        height={50}
                        data={data}
                        style={{position:'relative'}}
                        margin={{top:0,left:0,right:0,bottom:0}}
                    >
                        <Area type="monotone" dataKey="uv" stroke={this.props.chartBackgroundColor} fill={this.props.chartBackgroundColor} />
                    </AreaChart>

                </CardContent>

            </Card>
        );
    }
}

export default CommonDashboardCard;
import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnTermAutomationOrderByWithAggregationInput } from "../../../inputs/CourseOnTermAutomationOrderByWithAggregationInput";
import { CourseOnTermAutomationScalarWhereWithAggregatesInput } from "../../../inputs/CourseOnTermAutomationScalarWhereWithAggregatesInput";
import { CourseOnTermAutomationWhereInput } from "../../../inputs/CourseOnTermAutomationWhereInput";
import { CourseOnTermAutomationScalarFieldEnum } from "../../../../enums/CourseOnTermAutomationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCourseOnTermAutomationArgs {
  @TypeGraphQL.Field(_type => CourseOnTermAutomationWhereInput, {
    nullable: true
  })
  where?: CourseOnTermAutomationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CourseOnTermAutomationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"CourseOnTermAutomationID" | "FolderID" | "FK_AutomationID" | "FK_CourseOnTermID">;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CourseOnTermAutomationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

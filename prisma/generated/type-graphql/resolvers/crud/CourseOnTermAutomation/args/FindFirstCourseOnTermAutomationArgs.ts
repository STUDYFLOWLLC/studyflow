import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnTermAutomationOrderByWithRelationInput } from "../../../inputs/CourseOnTermAutomationOrderByWithRelationInput";
import { CourseOnTermAutomationWhereInput } from "../../../inputs/CourseOnTermAutomationWhereInput";
import { CourseOnTermAutomationWhereUniqueInput } from "../../../inputs/CourseOnTermAutomationWhereUniqueInput";
import { CourseOnTermAutomationScalarFieldEnum } from "../../../../enums/CourseOnTermAutomationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCourseOnTermAutomationArgs {
  @TypeGraphQL.Field(_type => CourseOnTermAutomationWhereInput, {
    nullable: true
  })
  where?: CourseOnTermAutomationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CourseOnTermAutomationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationWhereUniqueInput, {
    nullable: true
  })
  cursor?: CourseOnTermAutomationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"CourseOnTermAutomationID" | "FolderID" | "DefaultType" | "DefaultVisibility" | "DefaultRepetitionType" | "FK_AutomationID" | "FK_CourseOnTermID"> | undefined;
}

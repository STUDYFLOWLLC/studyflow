import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowOrderByWithRelationInput } from "../../../inputs/FlowOrderByWithRelationInput";
import { FlowWhereInput } from "../../../inputs/FlowWhereInput";
import { FlowWhereUniqueInput } from "../../../inputs/FlowWhereUniqueInput";
import { FlowScalarFieldEnum } from "../../../../enums/FlowScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class CourseOnTermFK_FlowsArgs {
  @TypeGraphQL.Field(_type => FlowWhereInput, {
    nullable: true
  })
  where?: FlowWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FlowOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FlowOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: true
  })
  cursor?: FlowWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [FlowScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"FlowID" | "CreatedTime" | "LastOpened" | "UserEnteredDate" | "Type" | "Title" | "Body" | "Visibility" | "FK_CourseOnTermID"> | undefined;
}

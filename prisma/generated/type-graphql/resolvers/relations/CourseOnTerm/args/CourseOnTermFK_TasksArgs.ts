import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskOrderByWithRelationInput } from "../../../inputs/TaskOrderByWithRelationInput";
import { TaskWhereInput } from "../../../inputs/TaskWhereInput";
import { TaskWhereUniqueInput } from "../../../inputs/TaskWhereUniqueInput";
import { TaskScalarFieldEnum } from "../../../../enums/TaskScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class CourseOnTermFK_TasksArgs {
  @TypeGraphQL.Field(_type => TaskWhereInput, {
    nullable: true
  })
  where?: TaskWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TaskOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TaskOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  cursor?: TaskWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"TaskID" | "CreatedTime" | "DeletedTime" | "Title" | "Completed" | "Description" | "DueDate" | "Type" | "FK_UserID" | "FK_FlowID" | "FK_CourseOnTermID" | "FK_RepetitionID"> | undefined;
}

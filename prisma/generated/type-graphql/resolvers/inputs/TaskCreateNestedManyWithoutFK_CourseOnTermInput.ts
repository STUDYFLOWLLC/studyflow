import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyFK_CourseOnTermInputEnvelope } from "../inputs/TaskCreateManyFK_CourseOnTermInputEnvelope";
import { TaskCreateOrConnectWithoutFK_CourseOnTermInput } from "../inputs/TaskCreateOrConnectWithoutFK_CourseOnTermInput";
import { TaskCreateWithoutFK_CourseOnTermInput } from "../inputs/TaskCreateWithoutFK_CourseOnTermInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedManyWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class TaskCreateNestedManyWithoutFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutFK_CourseOnTermInput], {
    nullable: true
  })
  create?: TaskCreateWithoutFK_CourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutFK_CourseOnTermInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutFK_CourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyFK_CourseOnTermInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyFK_CourseOnTermInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyFK_RepetitionInputEnvelope } from "../inputs/TaskCreateManyFK_RepetitionInputEnvelope";
import { TaskCreateOrConnectWithoutFK_RepetitionInput } from "../inputs/TaskCreateOrConnectWithoutFK_RepetitionInput";
import { TaskCreateWithoutFK_RepetitionInput } from "../inputs/TaskCreateWithoutFK_RepetitionInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedManyWithoutFK_RepetitionInput", {
  isAbstract: true
})
export class TaskCreateNestedManyWithoutFK_RepetitionInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutFK_RepetitionInput], {
    nullable: true
  })
  create?: TaskCreateWithoutFK_RepetitionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutFK_RepetitionInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutFK_RepetitionInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyFK_RepetitionInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyFK_RepetitionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;
}

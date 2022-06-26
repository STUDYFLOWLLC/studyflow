import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutFK_TaskLabelInput } from "../inputs/TaskCreateOrConnectWithoutFK_TaskLabelInput";
import { TaskCreateWithoutFK_TaskLabelInput } from "../inputs/TaskCreateWithoutFK_TaskLabelInput";
import { TaskUpdateWithoutFK_TaskLabelInput } from "../inputs/TaskUpdateWithoutFK_TaskLabelInput";
import { TaskUpsertWithoutFK_TaskLabelInput } from "../inputs/TaskUpsertWithoutFK_TaskLabelInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateOneWithoutFK_TaskLabelInput", {
  isAbstract: true
})
export class TaskUpdateOneWithoutFK_TaskLabelInput {
  @TypeGraphQL.Field(_type => TaskCreateWithoutFK_TaskLabelInput, {
    nullable: true
  })
  create?: TaskCreateWithoutFK_TaskLabelInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutFK_TaskLabelInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutFK_TaskLabelInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpsertWithoutFK_TaskLabelInput, {
    nullable: true
  })
  upsert?: TaskUpsertWithoutFK_TaskLabelInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutFK_TaskLabelInput, {
    nullable: true
  })
  update?: TaskUpdateWithoutFK_TaskLabelInput | undefined;
}

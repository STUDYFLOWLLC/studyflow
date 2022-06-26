import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateOrConnectWithoutFK_TasksInput } from "../inputs/FlowCreateOrConnectWithoutFK_TasksInput";
import { FlowCreateWithoutFK_TasksInput } from "../inputs/FlowCreateWithoutFK_TasksInput";
import { FlowUpdateWithoutFK_TasksInput } from "../inputs/FlowUpdateWithoutFK_TasksInput";
import { FlowUpsertWithoutFK_TasksInput } from "../inputs/FlowUpsertWithoutFK_TasksInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpdateOneWithoutFK_TasksInput", {
  isAbstract: true
})
export class FlowUpdateOneWithoutFK_TasksInput {
  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_TasksInput, {
    nullable: true
  })
  create?: FlowCreateWithoutFK_TasksInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateOrConnectWithoutFK_TasksInput, {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutFK_TasksInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpsertWithoutFK_TasksInput, {
    nullable: true
  })
  upsert?: FlowUpsertWithoutFK_TasksInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: true
  })
  connect?: FlowWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpdateWithoutFK_TasksInput, {
    nullable: true
  })
  update?: FlowUpdateWithoutFK_TasksInput | undefined;
}

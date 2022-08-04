import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepetitionCreateOrConnectWithoutFK_TasksInput } from "../inputs/RepetitionCreateOrConnectWithoutFK_TasksInput";
import { RepetitionCreateWithoutFK_TasksInput } from "../inputs/RepetitionCreateWithoutFK_TasksInput";
import { RepetitionWhereUniqueInput } from "../inputs/RepetitionWhereUniqueInput";

@TypeGraphQL.InputType("RepetitionCreateNestedOneWithoutFK_TasksInput", {
  isAbstract: true
})
export class RepetitionCreateNestedOneWithoutFK_TasksInput {
  @TypeGraphQL.Field(_type => RepetitionCreateWithoutFK_TasksInput, {
    nullable: true
  })
  create?: RepetitionCreateWithoutFK_TasksInput | undefined;

  @TypeGraphQL.Field(_type => RepetitionCreateOrConnectWithoutFK_TasksInput, {
    nullable: true
  })
  connectOrCreate?: RepetitionCreateOrConnectWithoutFK_TasksInput | undefined;

  @TypeGraphQL.Field(_type => RepetitionWhereUniqueInput, {
    nullable: true
  })
  connect?: RepetitionWhereUniqueInput | undefined;
}

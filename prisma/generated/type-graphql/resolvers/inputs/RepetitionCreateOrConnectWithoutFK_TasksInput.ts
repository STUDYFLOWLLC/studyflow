import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepetitionCreateWithoutFK_TasksInput } from "../inputs/RepetitionCreateWithoutFK_TasksInput";
import { RepetitionWhereUniqueInput } from "../inputs/RepetitionWhereUniqueInput";

@TypeGraphQL.InputType("RepetitionCreateOrConnectWithoutFK_TasksInput", {
  isAbstract: true
})
export class RepetitionCreateOrConnectWithoutFK_TasksInput {
  @TypeGraphQL.Field(_type => RepetitionWhereUniqueInput, {
    nullable: false
  })
  where!: RepetitionWhereUniqueInput;

  @TypeGraphQL.Field(_type => RepetitionCreateWithoutFK_TasksInput, {
    nullable: false
  })
  create!: RepetitionCreateWithoutFK_TasksInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateOrConnectWithoutRepetitionInput } from "../inputs/FlowCreateOrConnectWithoutRepetitionInput";
import { FlowCreateWithoutRepetitionInput } from "../inputs/FlowCreateWithoutRepetitionInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateNestedOneWithoutRepetitionInput", {
  isAbstract: true
})
export class FlowCreateNestedOneWithoutRepetitionInput {
  @TypeGraphQL.Field(_type => FlowCreateWithoutRepetitionInput, {
    nullable: true
  })
  create?: FlowCreateWithoutRepetitionInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateOrConnectWithoutRepetitionInput, {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutRepetitionInput | undefined;

  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: true
  })
  connect?: FlowWhereUniqueInput | undefined;
}

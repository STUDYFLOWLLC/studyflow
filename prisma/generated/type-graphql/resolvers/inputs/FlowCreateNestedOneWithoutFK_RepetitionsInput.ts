import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateOrConnectWithoutFK_RepetitionsInput } from "../inputs/FlowCreateOrConnectWithoutFK_RepetitionsInput";
import { FlowCreateWithoutFK_RepetitionsInput } from "../inputs/FlowCreateWithoutFK_RepetitionsInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateNestedOneWithoutFK_RepetitionsInput", {
  isAbstract: true
})
export class FlowCreateNestedOneWithoutFK_RepetitionsInput {
  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_RepetitionsInput, {
    nullable: true
  })
  create?: FlowCreateWithoutFK_RepetitionsInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateOrConnectWithoutFK_RepetitionsInput, {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutFK_RepetitionsInput | undefined;

  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: true
  })
  connect?: FlowWhereUniqueInput | undefined;
}

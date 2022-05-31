import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateOrConnectWithoutFK_TagsInput } from "../inputs/FlowCreateOrConnectWithoutFK_TagsInput";
import { FlowCreateWithoutFK_TagsInput } from "../inputs/FlowCreateWithoutFK_TagsInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateNestedOneWithoutFK_TagsInput", {
  isAbstract: true
})
export class FlowCreateNestedOneWithoutFK_TagsInput {
  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_TagsInput, {
    nullable: true
  })
  create?: FlowCreateWithoutFK_TagsInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateOrConnectWithoutFK_TagsInput, {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutFK_TagsInput | undefined;

  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: true
  })
  connect?: FlowWhereUniqueInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowViewCreateManyFK_FlowInputEnvelope } from "../inputs/FlowViewCreateManyFK_FlowInputEnvelope";
import { FlowViewCreateOrConnectWithoutFK_FlowInput } from "../inputs/FlowViewCreateOrConnectWithoutFK_FlowInput";
import { FlowViewCreateWithoutFK_FlowInput } from "../inputs/FlowViewCreateWithoutFK_FlowInput";
import { FlowViewWhereUniqueInput } from "../inputs/FlowViewWhereUniqueInput";

@TypeGraphQL.InputType("FlowViewCreateNestedManyWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlowViewCreateNestedManyWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => [FlowViewCreateWithoutFK_FlowInput], {
    nullable: true
  })
  create?: FlowViewCreateWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewCreateOrConnectWithoutFK_FlowInput], {
    nullable: true
  })
  connectOrCreate?: FlowViewCreateOrConnectWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowViewCreateManyFK_FlowInputEnvelope, {
    nullable: true
  })
  createMany?: FlowViewCreateManyFK_FlowInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlowViewWhereUniqueInput], {
    nullable: true
  })
  connect?: FlowViewWhereUniqueInput[] | undefined;
}

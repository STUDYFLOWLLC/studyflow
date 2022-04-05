import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateManyCreatedByUserInputEnvelope } from "../inputs/FlowCreateManyCreatedByUserInputEnvelope";
import { FlowCreateOrConnectWithoutCreatedByUserInput } from "../inputs/FlowCreateOrConnectWithoutCreatedByUserInput";
import { FlowCreateWithoutCreatedByUserInput } from "../inputs/FlowCreateWithoutCreatedByUserInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateNestedManyWithoutCreatedByUserInput", {
  isAbstract: true
})
export class FlowCreateNestedManyWithoutCreatedByUserInput {
  @TypeGraphQL.Field(_type => [FlowCreateWithoutCreatedByUserInput], {
    nullable: true
  })
  create?: FlowCreateWithoutCreatedByUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowCreateOrConnectWithoutCreatedByUserInput], {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutCreatedByUserInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowCreateManyCreatedByUserInputEnvelope, {
    nullable: true
  })
  createMany?: FlowCreateManyCreatedByUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlowWhereUniqueInput], {
    nullable: true
  })
  connect?: FlowWhereUniqueInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepetitionCreateManyFK_FlowInputEnvelope } from "../inputs/RepetitionCreateManyFK_FlowInputEnvelope";
import { RepetitionCreateOrConnectWithoutFK_FlowInput } from "../inputs/RepetitionCreateOrConnectWithoutFK_FlowInput";
import { RepetitionCreateWithoutFK_FlowInput } from "../inputs/RepetitionCreateWithoutFK_FlowInput";
import { RepetitionWhereUniqueInput } from "../inputs/RepetitionWhereUniqueInput";

@TypeGraphQL.InputType("RepetitionCreateNestedManyWithoutFK_FlowInput", {
  isAbstract: true
})
export class RepetitionCreateNestedManyWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => [RepetitionCreateWithoutFK_FlowInput], {
    nullable: true
  })
  create?: RepetitionCreateWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [RepetitionCreateOrConnectWithoutFK_FlowInput], {
    nullable: true
  })
  connectOrCreate?: RepetitionCreateOrConnectWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => RepetitionCreateManyFK_FlowInputEnvelope, {
    nullable: true
  })
  createMany?: RepetitionCreateManyFK_FlowInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RepetitionWhereUniqueInput], {
    nullable: true
  })
  connect?: RepetitionWhereUniqueInput[] | undefined;
}

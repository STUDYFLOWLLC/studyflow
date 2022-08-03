import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepetitionCreateManyFK_FlowInputEnvelope } from "../inputs/RepetitionCreateManyFK_FlowInputEnvelope";
import { RepetitionCreateOrConnectWithoutFK_FlowInput } from "../inputs/RepetitionCreateOrConnectWithoutFK_FlowInput";
import { RepetitionCreateWithoutFK_FlowInput } from "../inputs/RepetitionCreateWithoutFK_FlowInput";
import { RepetitionScalarWhereInput } from "../inputs/RepetitionScalarWhereInput";
import { RepetitionUpdateManyWithWhereWithoutFK_FlowInput } from "../inputs/RepetitionUpdateManyWithWhereWithoutFK_FlowInput";
import { RepetitionUpdateWithWhereUniqueWithoutFK_FlowInput } from "../inputs/RepetitionUpdateWithWhereUniqueWithoutFK_FlowInput";
import { RepetitionUpsertWithWhereUniqueWithoutFK_FlowInput } from "../inputs/RepetitionUpsertWithWhereUniqueWithoutFK_FlowInput";
import { RepetitionWhereUniqueInput } from "../inputs/RepetitionWhereUniqueInput";

@TypeGraphQL.InputType("RepetitionUpdateManyWithoutFK_FlowInput", {
  isAbstract: true
})
export class RepetitionUpdateManyWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => [RepetitionCreateWithoutFK_FlowInput], {
    nullable: true
  })
  create?: RepetitionCreateWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [RepetitionCreateOrConnectWithoutFK_FlowInput], {
    nullable: true
  })
  connectOrCreate?: RepetitionCreateOrConnectWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [RepetitionUpsertWithWhereUniqueWithoutFK_FlowInput], {
    nullable: true
  })
  upsert?: RepetitionUpsertWithWhereUniqueWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => RepetitionCreateManyFK_FlowInputEnvelope, {
    nullable: true
  })
  createMany?: RepetitionCreateManyFK_FlowInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RepetitionWhereUniqueInput], {
    nullable: true
  })
  set?: RepetitionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RepetitionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: RepetitionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RepetitionWhereUniqueInput], {
    nullable: true
  })
  delete?: RepetitionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RepetitionWhereUniqueInput], {
    nullable: true
  })
  connect?: RepetitionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RepetitionUpdateWithWhereUniqueWithoutFK_FlowInput], {
    nullable: true
  })
  update?: RepetitionUpdateWithWhereUniqueWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [RepetitionUpdateManyWithWhereWithoutFK_FlowInput], {
    nullable: true
  })
  updateMany?: RepetitionUpdateManyWithWhereWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [RepetitionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RepetitionScalarWhereInput[] | undefined;
}

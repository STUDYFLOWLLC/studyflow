import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowViewCreateManyFK_FlowInputEnvelope } from "../inputs/FlowViewCreateManyFK_FlowInputEnvelope";
import { FlowViewCreateOrConnectWithoutFK_FlowInput } from "../inputs/FlowViewCreateOrConnectWithoutFK_FlowInput";
import { FlowViewCreateWithoutFK_FlowInput } from "../inputs/FlowViewCreateWithoutFK_FlowInput";
import { FlowViewScalarWhereInput } from "../inputs/FlowViewScalarWhereInput";
import { FlowViewUpdateManyWithWhereWithoutFK_FlowInput } from "../inputs/FlowViewUpdateManyWithWhereWithoutFK_FlowInput";
import { FlowViewUpdateWithWhereUniqueWithoutFK_FlowInput } from "../inputs/FlowViewUpdateWithWhereUniqueWithoutFK_FlowInput";
import { FlowViewUpsertWithWhereUniqueWithoutFK_FlowInput } from "../inputs/FlowViewUpsertWithWhereUniqueWithoutFK_FlowInput";
import { FlowViewWhereUniqueInput } from "../inputs/FlowViewWhereUniqueInput";

@TypeGraphQL.InputType("FlowViewUpdateManyWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlowViewUpdateManyWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => [FlowViewCreateWithoutFK_FlowInput], {
    nullable: true
  })
  create?: FlowViewCreateWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewCreateOrConnectWithoutFK_FlowInput], {
    nullable: true
  })
  connectOrCreate?: FlowViewCreateOrConnectWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewUpsertWithWhereUniqueWithoutFK_FlowInput], {
    nullable: true
  })
  upsert?: FlowViewUpsertWithWhereUniqueWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowViewCreateManyFK_FlowInputEnvelope, {
    nullable: true
  })
  createMany?: FlowViewCreateManyFK_FlowInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlowViewWhereUniqueInput], {
    nullable: true
  })
  set?: FlowViewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FlowViewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewWhereUniqueInput], {
    nullable: true
  })
  delete?: FlowViewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewWhereUniqueInput], {
    nullable: true
  })
  connect?: FlowViewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewUpdateWithWhereUniqueWithoutFK_FlowInput], {
    nullable: true
  })
  update?: FlowViewUpdateWithWhereUniqueWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewUpdateManyWithWhereWithoutFK_FlowInput], {
    nullable: true
  })
  updateMany?: FlowViewUpdateManyWithWhereWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FlowViewScalarWhereInput[] | undefined;
}

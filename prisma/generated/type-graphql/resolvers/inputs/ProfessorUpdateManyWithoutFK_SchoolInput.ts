import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorCreateManyFK_SchoolInputEnvelope } from "../inputs/ProfessorCreateManyFK_SchoolInputEnvelope";
import { ProfessorCreateOrConnectWithoutFK_SchoolInput } from "../inputs/ProfessorCreateOrConnectWithoutFK_SchoolInput";
import { ProfessorCreateWithoutFK_SchoolInput } from "../inputs/ProfessorCreateWithoutFK_SchoolInput";
import { ProfessorScalarWhereInput } from "../inputs/ProfessorScalarWhereInput";
import { ProfessorUpdateManyWithWhereWithoutFK_SchoolInput } from "../inputs/ProfessorUpdateManyWithWhereWithoutFK_SchoolInput";
import { ProfessorUpdateWithWhereUniqueWithoutFK_SchoolInput } from "../inputs/ProfessorUpdateWithWhereUniqueWithoutFK_SchoolInput";
import { ProfessorUpsertWithWhereUniqueWithoutFK_SchoolInput } from "../inputs/ProfessorUpsertWithWhereUniqueWithoutFK_SchoolInput";
import { ProfessorWhereUniqueInput } from "../inputs/ProfessorWhereUniqueInput";

@TypeGraphQL.InputType("ProfessorUpdateManyWithoutFK_SchoolInput", {
  isAbstract: true
})
export class ProfessorUpdateManyWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => [ProfessorCreateWithoutFK_SchoolInput], {
    nullable: true
  })
  create?: ProfessorCreateWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorCreateOrConnectWithoutFK_SchoolInput], {
    nullable: true
  })
  connectOrCreate?: ProfessorCreateOrConnectWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorUpsertWithWhereUniqueWithoutFK_SchoolInput], {
    nullable: true
  })
  upsert?: ProfessorUpsertWithWhereUniqueWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => ProfessorCreateManyFK_SchoolInputEnvelope, {
    nullable: true
  })
  createMany?: ProfessorCreateManyFK_SchoolInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProfessorWhereUniqueInput], {
    nullable: true
  })
  set?: ProfessorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProfessorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorWhereUniqueInput], {
    nullable: true
  })
  delete?: ProfessorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorWhereUniqueInput], {
    nullable: true
  })
  connect?: ProfessorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorUpdateWithWhereUniqueWithoutFK_SchoolInput], {
    nullable: true
  })
  update?: ProfessorUpdateWithWhereUniqueWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorUpdateManyWithWhereWithoutFK_SchoolInput], {
    nullable: true
  })
  updateMany?: ProfessorUpdateManyWithWhereWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProfessorScalarWhereInput[] | undefined;
}

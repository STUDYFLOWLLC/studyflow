import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorCreateManyFK_CourseInputEnvelope } from "../inputs/ProfessorCreateManyFK_CourseInputEnvelope";
import { ProfessorCreateOrConnectWithoutFK_CourseInput } from "../inputs/ProfessorCreateOrConnectWithoutFK_CourseInput";
import { ProfessorCreateWithoutFK_CourseInput } from "../inputs/ProfessorCreateWithoutFK_CourseInput";
import { ProfessorScalarWhereInput } from "../inputs/ProfessorScalarWhereInput";
import { ProfessorUpdateManyWithWhereWithoutFK_CourseInput } from "../inputs/ProfessorUpdateManyWithWhereWithoutFK_CourseInput";
import { ProfessorUpdateWithWhereUniqueWithoutFK_CourseInput } from "../inputs/ProfessorUpdateWithWhereUniqueWithoutFK_CourseInput";
import { ProfessorUpsertWithWhereUniqueWithoutFK_CourseInput } from "../inputs/ProfessorUpsertWithWhereUniqueWithoutFK_CourseInput";
import { ProfessorWhereUniqueInput } from "../inputs/ProfessorWhereUniqueInput";

@TypeGraphQL.InputType("ProfessorUpdateManyWithoutFK_CourseInput", {
  isAbstract: true
})
export class ProfessorUpdateManyWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => [ProfessorCreateWithoutFK_CourseInput], {
    nullable: true
  })
  create?: ProfessorCreateWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorCreateOrConnectWithoutFK_CourseInput], {
    nullable: true
  })
  connectOrCreate?: ProfessorCreateOrConnectWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorUpsertWithWhereUniqueWithoutFK_CourseInput], {
    nullable: true
  })
  upsert?: ProfessorUpsertWithWhereUniqueWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => ProfessorCreateManyFK_CourseInputEnvelope, {
    nullable: true
  })
  createMany?: ProfessorCreateManyFK_CourseInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ProfessorUpdateWithWhereUniqueWithoutFK_CourseInput], {
    nullable: true
  })
  update?: ProfessorUpdateWithWhereUniqueWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorUpdateManyWithWhereWithoutFK_CourseInput], {
    nullable: true
  })
  updateMany?: ProfessorUpdateManyWithWhereWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProfessorScalarWhereInput[] | undefined;
}

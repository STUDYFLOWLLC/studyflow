import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorsOnCoursesCreateManyFK_ProfessorInputEnvelope } from "../inputs/ProfessorsOnCoursesCreateManyFK_ProfessorInputEnvelope";
import { ProfessorsOnCoursesCreateOrConnectWithoutFK_ProfessorInput } from "../inputs/ProfessorsOnCoursesCreateOrConnectWithoutFK_ProfessorInput";
import { ProfessorsOnCoursesCreateWithoutFK_ProfessorInput } from "../inputs/ProfessorsOnCoursesCreateWithoutFK_ProfessorInput";
import { ProfessorsOnCoursesScalarWhereInput } from "../inputs/ProfessorsOnCoursesScalarWhereInput";
import { ProfessorsOnCoursesUpdateManyWithWhereWithoutFK_ProfessorInput } from "../inputs/ProfessorsOnCoursesUpdateManyWithWhereWithoutFK_ProfessorInput";
import { ProfessorsOnCoursesUpdateWithWhereUniqueWithoutFK_ProfessorInput } from "../inputs/ProfessorsOnCoursesUpdateWithWhereUniqueWithoutFK_ProfessorInput";
import { ProfessorsOnCoursesUpsertWithWhereUniqueWithoutFK_ProfessorInput } from "../inputs/ProfessorsOnCoursesUpsertWithWhereUniqueWithoutFK_ProfessorInput";
import { ProfessorsOnCoursesWhereUniqueInput } from "../inputs/ProfessorsOnCoursesWhereUniqueInput";

@TypeGraphQL.InputType("ProfessorsOnCoursesUpdateManyWithoutFK_ProfessorInput", {
  isAbstract: true
})
export class ProfessorsOnCoursesUpdateManyWithoutFK_ProfessorInput {
  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesCreateWithoutFK_ProfessorInput], {
    nullable: true
  })
  create?: ProfessorsOnCoursesCreateWithoutFK_ProfessorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesCreateOrConnectWithoutFK_ProfessorInput], {
    nullable: true
  })
  connectOrCreate?: ProfessorsOnCoursesCreateOrConnectWithoutFK_ProfessorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesUpsertWithWhereUniqueWithoutFK_ProfessorInput], {
    nullable: true
  })
  upsert?: ProfessorsOnCoursesUpsertWithWhereUniqueWithoutFK_ProfessorInput[] | undefined;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesCreateManyFK_ProfessorInputEnvelope, {
    nullable: true
  })
  createMany?: ProfessorsOnCoursesCreateManyFK_ProfessorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesWhereUniqueInput], {
    nullable: true
  })
  set?: ProfessorsOnCoursesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProfessorsOnCoursesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesWhereUniqueInput], {
    nullable: true
  })
  delete?: ProfessorsOnCoursesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesWhereUniqueInput], {
    nullable: true
  })
  connect?: ProfessorsOnCoursesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesUpdateWithWhereUniqueWithoutFK_ProfessorInput], {
    nullable: true
  })
  update?: ProfessorsOnCoursesUpdateWithWhereUniqueWithoutFK_ProfessorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesUpdateManyWithWhereWithoutFK_ProfessorInput], {
    nullable: true
  })
  updateMany?: ProfessorsOnCoursesUpdateManyWithWhereWithoutFK_ProfessorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProfessorsOnCoursesScalarWhereInput[] | undefined;
}
